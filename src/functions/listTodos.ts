export const handle = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "is ok"
    }),
    headers: {
    "Content-Type": "application/json"
    }
  }
}