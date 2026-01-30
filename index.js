// index.js
async function executeCall() {
    const url = 'https://clickartiddinkspain.woffu.com/api/svc/signs/signs'; 
    const token = process.env.API_TOKEN;
    const data ={
        agreementEventId: null,
        requestId: null,
        deviceId: "WebApp",
        latitude: 38.2253292476804,
        longitude: -0.5242317991482244,
        timezoneOffset: -60
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
      });
  
      if (response.status === 201) {
        console.log(`[${new Date().toLocaleString()}] POST exitoso:`, response.status);
      } else {
        console.error(`[${new Date().toLocaleString()}] Error en la API:`, response.status);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  }
  
  executeCall();