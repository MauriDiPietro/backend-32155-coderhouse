curl -X GET "http://localhost:8080/newUser?username=dani&password=qwerty123"

artillery quick --count 10 -n 50 "http://localhost:8080/auth-nobloq?username=dani&password=qwerty123" > result_nobloq.txt



