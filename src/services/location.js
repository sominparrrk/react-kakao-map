import axios from "axios";

const apiKey = process.env.REACT_APP_SEOUL_DATA_API;

const location = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const fetchedData = await axios.get(
        `http://openapi.seoul.go.kr:8088/${apiKey}/json/OpenAptInfo/1/1000/`
      );

      if (
        fetchedData.data.OpenAptInfo.RESULT.MESSAGE === "정상 처리되었습니다"
      ) {
        const list = fetchedData.data.OpenAptInfo.row;
        const parsedList = list.map((list) => {
          const obj = {
            id: list.APT_CODE,
            name: list.APT_NM,
            latlng: { lat: list.Y_CODE, lng: list.X_CODE },
            quantity: Math.floor(Math.random() * 50),
          };
          return obj;
        });
        console.log(parsedList);
        resolve(parsedList);
      } else {
        console.error(fetchedData.data.OpenAptInfo.RESULT.MESSAGE);
      }
    } catch (error) {
      console.error("error");
    }
  });
};

export default location;
