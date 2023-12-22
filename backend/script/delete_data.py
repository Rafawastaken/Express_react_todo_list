import requests

ids = [
    "6580e2d5c9c5663794ed44ad",
    "6580e3d0b3e39f1c340c0ddf",
    "6580e5490997ad00783fe9ef",
    "65834b1b99350f46300f8d69",
    "65834bc699350f46300f8d6b",
    "6583762beaeb4f17189b8f55"
]

for id_delete in ids:
    print('Deleting: ' + id_delete)
    endpoint = f"http://localhost:3000/api/v1/tasks/{id_delete}"
    r = requests.delete(endpoint)
    print(r.status_code)