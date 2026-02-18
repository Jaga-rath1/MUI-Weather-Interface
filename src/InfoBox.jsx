import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({Info}){
    let ColdImg_url =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HotImg_url =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RainImg_url =
    "https://images.unsplash.com/photo-1626124902047-f3db8b02f740?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return(
        <div className="infobox-wrapper">
            <h2 className="infobox-heading">Weather Information </h2>
            <br />
            <br />
            <br />
            
                <div className= "card-container">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {Info.Humidity > 80 ? RainImg_url : Info.Temp > 25 ? HotImg_url : ColdImg_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.City} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component="div">
          <div>Tempreture : {Info.Temp}&deg;</div>
          <div>Air Pressure : {Info.Air_Pressure}</div>
          <div>Humidity : {Info.Humidity}</div>
          <div>Minimum Temreature : {Info.Temp_Min}&deg; </div>
          <div>Maximum Tempreature : {Info.Temp_Max}&deg;</div>
          <p>The Weather Can be Described as {Info.Weather} feels Like {Info.Feels_like}&deg; </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
            
        </div>
    )
}