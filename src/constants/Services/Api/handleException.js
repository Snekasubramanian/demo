const HandleException = (err) => {
  console.log(err, "from handleException");
  try {
    if (err?.response?.data) {
      let { data, status, statusText, config, headers, request } = err.response;
      if (status == 400) {
        alert(data?.message);

        return data;
      } else if (status == 401) {
        alert("You have already logged in another device");
        setTimeout(() => {
          localStorage.clear();
          window.location.href = "/";
        }, 2000);
      } else if (status == 404) {
        alert("Page Not Found");
      } else {
        alert(`status  retruns ${data?.message}`);
      }
    } else {
      alert("Something went wrongcheck or check your internet");
    }
  } catch (error) {
    alert("Someting went wrong or check your internet");
  }
  return {};
};

export default HandleException;
