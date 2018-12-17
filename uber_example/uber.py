import pandas as pd
import matplotlib.pyplot as plt
import json

df = pd.read_csv('uber_sample.csv', header=None)
df = df.values[:,[1,2]]

# No truth values, we are working with real data!
data = {
    "x": df[:, 0].tolist(),
    "y": df[:, 1].tolist(),
    "t": []
}
with open('data.json', 'w') as outfile:
    json.dump(data, outfile)
