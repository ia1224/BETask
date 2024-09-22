// POST: Logic to process JSON data
const processRequest = (req, res) => {
  const { data, file_b64 } = req.body;

  // Check if data is valid
  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, message: "Invalid data format" });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[A-Za-z]+$/.test(item));
  const highestLowercase =
    alphabets
      .filter((item) => item === item.toLowerCase())
      .sort()
      .pop() || null;

  // Fake file validation (as base64 wasn't sent in actual example)
  const fileValid = file_b64 ? true : false;
  const fileMimeType = fileValid ? "application/octet-stream" : null; // Example mime type
  const fileSizeKb = file_b64 ? (file_b64.length * 0.75) / 1024 : 0; // Estimate file size in KB

  const response = {
    is_success: true,
    user_id: "john_doe_17091999", // Replace with actual format
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
    file_valid: fileValid,
    file_mime_type: fileMimeType,
    file_size_kb: fileSizeKb.toFixed(2),
  };

  return res.json(response);
};

// GET: Returns a hardcoded operation code
const getOperationCode = (req, res) => {
  return res.status(200).json({ operation_code: 1 });
};

module.exports = { processRequest, getOperationCode };
