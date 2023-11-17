export default (req, res) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  
    // Use apiUrl and apiKey in your server-side logic
  
    res.status(200).json({ apiUrl, apiKey });
  };