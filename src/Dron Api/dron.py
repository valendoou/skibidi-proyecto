from pyparrot.Minidrone import Mambo
import time

# Inicia el dron Mateo Quintana 6° 1°
mambo = Mambo(533198, use_wifi=True)

# Conecta al dron
success = mambo.connect(num_retries=3)
if success:
    print("Conectado al dron")
else:
    print("No se pudo conectar al dron")
    exit()

try:
    # Realizando despliegue
    print("Despegando...")
    mambo.takeoff() 
    time.sleep(5)  # Eleva el dron al aire durante 5 segundos

    # Mueve el dron hacia delante :P
    print("Moviendo hacia adelante...")
    mambo.fly_direct(roll=0, pitch=50, yaw=0, vertical_movement=0, duration=2)  # Reduce el pitch

    time.sleep(3)  # Aguanta 3 segundos en el aire antes de aterrizar

    # Aterrizado Mateo Quintana 6° 1°
    print("Aterrizando...")
    mambo.land()

finally:
    # Desconectar
    mambo.disconnect()
    print("Desconectado del dron")