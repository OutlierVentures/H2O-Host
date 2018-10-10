import sklearn.datasets.samples_generator as gen
import json

data, truth = gen.make_blobs(n_samples = 20,
                             centers = 4,
                             cluster_std = 0.50,
                             random_state = 0)

x_1 = [i[0] for i in data]
x_2 = [i[1] for i in data]

struct = {
    'x': x_1,
    'y': x_2,
    'truth': truth.tolist()
}

with open('data.json', 'w') as outfile:
    json.dump(struct, outfile)
