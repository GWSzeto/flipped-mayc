import requests
import json
import os
import glob
import time
from pprint import pprint
import urllib.request
from retry import retry
from PIL import Image, ImageOps
metadata_path = '/home/gwszeto/mayc_metadata/metadata'
image_path = '/home/gwszeto/mayc_metadata/images'
files = os.listdir(metadata_path)

def get_mayc_metadata():
    j = 0
    for i in range(31000):
        time.sleep(0.75)
        try:
            res = requests.get('https://boredapeyachtclub.com/api/mutants/{}'.format(i))
            res.json()
            with open('metadata/{}'.format(j), 'w') as f:
                json.dump(res.json(), f)
                print("metadata stored for id: ", j)
                j += 1
        except:
            print("mint doesn't exist for id: ", i)

         
def get_mayc_metadata_async():    
    urls = ['https://boredapeyachtclub.com/api/mutants/{}'.format(i) for i in range(100)]
    rs = (grequests.get(u) for u in urls)
    responses = grequests.map(rs)
    for i, res in enumerate(responses):
        try:
            res.json()
            with open('metadata/{}.json'.format(i), 'w') as f:
                json.dump(res.json(), f)
            print("metdata stored for id: ", i)
        except:
            print("mint doesn't exist for id: ", i)

@retry(urllib.error.URLError, tries=4)
def download(index, url):
    filename = "images/{}.png".format(index)
    urllib.request.urlretrieve(url, filename)

def get_mayc_image():
    image_urls = []
    files = glob.glob(os.path.join(metadata_path, '*')) 
    for filename in files[515:]:
        with open(filename, encoding='utf-8', mode='r') as currentFile:
            data=currentFile.read().replace('\n', '')
            image_url = json.loads(data)['image']
            image_urls.append('https://ipfs.io/ipfs/{}'.format(image_url.split('/')[-1]))
    for index, url in enumerate(image_urls):
        print(515 + index, url)
        download(515 + index, url)

def flip_images():
    for filename in glob.glob(os.path.join(image_path, '*.png')): 
        im = Image.open(filename)
        im_flip = ImageOps.flip(im)
        im_flip.save(filename, quality=95)

def update_image_url():
    for filename in glob.glob(os.path.join(metadata_path, '*')):
        with open(filename, 'r') as current_file:
            data = json.load(current_file)
        data['image'] = 'ipfs://QmboLN7Sgi6FUGVN8jjgBtpkX6WadoHucgg8D63bnS2avH/{}.png'.format(filename)
        with open(filename, 'w') as json_file:
            json.dump(data, json_file)

# get_mayc_metadata()
# get_mayc_image()
# flip_images()
update_image_url()
# rename_files()
