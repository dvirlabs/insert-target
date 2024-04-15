from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.chdir("..")

@app.post("/add_target")
async def add_target(data: dict): 
    # Validate IP address format
    try:
        target_ip = data.get('target_ip')
        from ipaddress import ip_address
        ip_address(target_ip)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid IP address format")
    
    targets_file = "git/insert-target/prometheus-app/test.yml"
    
    # Update prometheus.yml with the new target
<<<<<<< HEAD
    with open("test.yml", "a") as f:
        f.write(f"  - targets: ['{target_ip}:9090']\n")  # Adjust port if needed 
=======
    with open(targets_file, "a") as f:
        f.write(f"\n  - '{target_ip}:9090'")  # Adjust port if needed 
>>>>>>> 47cbe31c24ada730b987b88f9d17d269cb59facc

    return {"message": f"Target {target_ip} added successfully!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8000)
