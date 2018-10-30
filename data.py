'''
Script for generating clusterable data and writing to JSON.
To change the dataset, modify the parameters of make_blobs.
'''

from random import randint
import sklearn.datasets.samples_generator as gen
import json


num_points = randint(20, 100)

data, truth = gen.make_blobs(n_samples = num_points,
                             centers = 4,
                             cluster_std = 0.50,
                             random_state = 0)

x = [i[0] for i in data]
y = [i[1] for i in data]

struct = {
    'x': x,
    'y': y,
    't': truth.tolist()
    }

with open('data.json', 'w') as outfile:
    json.dump(struct, outfile)
