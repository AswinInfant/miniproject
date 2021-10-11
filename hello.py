
import sys
import requests
# Takes first name and last name via command 
# line arguments and then display them
print("Output from Python")
print("First name: " + sys.argv[1])
print("Last name: " + sys.argv[2])

api_url = 'https://api.calorieninjas.com/v1/nutrition?query='
query = 'banana'
response = requests.get(api_url + query, headers={'X-Api-Key': 'YXC9wHz0W/ebIP7HTJvnSA==6I0nMhcEbdoFzA5R'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
