const PrepareResponse = (res) => {
  if (res?.status) {
    let { status, data } = res;
    if (status >= 200 && status <= 299) {
      if (data.status == "success") {
        return data;
      } else if (data.status == true) {
        return data;
      } else if (data.status == "failure") {
        return data;
      } else if (data.status == "empty") {
        return data;
      } else if (data.status == "error") {
        alert("", data.message);
        return data;
      }
    } else {
      alert(`message: ${data?.message}`);
    }
  } else {
    alert("");
  }
  return {};
};

export default PrepareResponse;
