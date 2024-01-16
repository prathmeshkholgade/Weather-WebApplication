import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

let hot =
  "https://plus.unsplash.com/premium_photo-1661960937960-1883bf00f480?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let rain =
  "https://images.unsplash.com/photo-1638829971615-94cee319942e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let cold =
  "https://images.unsplash.com/photo-1692719058797-2954b100c8fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjBtYW5hbGklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";

export default function InfoBox({ info }) {
  //   let info = {
  //     city: "Multai",
  //     feels_like: 23.26,
  //     humidity: 29,
  //     temmax: 24.04,
  //     temp: 24.04,
  //     tempmin: 24.04,
  //     weather: "clear sky",
  //   };

  return (
    <div className="Cantainer">
      <h3>Weather Information</h3>
      <div>
        <Card sx={{ maxWidth: 385 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={info.humidity > 80 ? rain : info.temp > 15 ? hot : cold}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} &nbsp;
                {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature = {info.temp} &deg;C</p>
              <p>Humidity = {info.humidity} &deg;C</p>
              <p>tempMin = {info.tempmin} &deg;C</p>
              <p>tempMax = {info.temmax} &deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and
                feels_like {info.feels_like} &deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
