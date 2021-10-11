import sys
import requests

api_url = 'https://api.calorieninjas.com/v1/nutrition?query='
query = sys.argv[1]
response = requests.get(api_url + query, headers={'X-Api-Key': 'YXC9wHz0W/ebIP7HTJvnSA==6I0nMhcEbdoFzA5R'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)

