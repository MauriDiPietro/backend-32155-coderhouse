curl -X GET "http://localhost:8080/newUser?username=ezequiel&password=1234"

autocannon -c 100 -d 15 'http://localhost:8080/auth-nobloq?username=luca&password=1234'

