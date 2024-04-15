from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/add_target")
async def add_target(data: dict): 
    # Validate IP address format
    try:
        target_ip = data.get('target_ip')
        from ipaddress import ip_address
        ip_address(target_ip)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid IP address format")

    # Update prometheus.yml with the new target
    with open("test.yml", "a") as f:
        f.write(f"\n  - '{target_ip}:9090'")  # Adjust port if needed 

    return {"message": f"Target {target_ip} added successfully!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8000)
