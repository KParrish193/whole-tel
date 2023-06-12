// TODO: may not need this if doing the google sheet integration

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

//   TODO: edit this to match form
  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.first || !body.last) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "First or last name not found" });
  }

//   TODO: edit this to match form
  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.first} ${body.last}` });
}
