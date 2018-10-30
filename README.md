# H2O-Host

Provider of the OrbitDB database for H2O.


### Requirements

- Node 8
- For periodic data generation (i.e. sample data for testing): Linux, Python 3 + SKLearn


### Run

Install dependencies:
```
npm install
```

#### Hosting sample data for testing (Linux only)

```
./periodic_data_gen
```


#### Using your own dataset

Put a JSON with the following format in the root directory:
```
{
  "x": [0.2,8.5,...]
  "y": [-3.4,12.2,...]
  "t": [0, 1, ...]
}
```
The `t` field is ground truth, i.e. the clusters. This is optional, simply remove the line `await db.put( { _id: 't', array: data.t })` in `host.js` if you don't have ground truth.

*Advanced:* if you're familiar with SKLearn, any dataset that can be clustered with `sklearn.kmeans` will work as long as it is in JSON format.


### Roadmap

1. Read-only database replication
