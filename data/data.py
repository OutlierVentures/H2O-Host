'''
Sample Python script for generating clusterable data and writing to JSON.
To change the dataset, modify the parameters of make_blobs.
'''

import sklearn.datasets.samples_generator as gen
import json

data, truth = gen.make_blobs(n_samples = 20,
                             centers = 4,
                             cluster_std = 0.50,
                             random_state = 0)

x = [i[0] for i in data]
y = [i[1] for i in data]

struct = {
    'x': x,
    'y': y,
    'truth': truth.tolist()
}

with open('data.json', 'w') as outfile:
    json.dump(struct, outfile)
