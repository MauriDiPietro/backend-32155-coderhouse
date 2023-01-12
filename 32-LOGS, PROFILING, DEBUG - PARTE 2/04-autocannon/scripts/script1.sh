curl -X GET "http://localhost:8080/newUser?username=agustin&password=1234"

autocannon -c 100 -d 15 'http://localhost:8080/auth-bloq?username=sergio&password=1234'
    # -c es el nro de clientes en simultaneo conectados
    # -d es el tiempo que va a estar corriendo autocannon
    
