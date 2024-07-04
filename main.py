import requests

response = requests.post('https://google.com')
print(response.status_code)
