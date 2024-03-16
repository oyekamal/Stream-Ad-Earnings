import { Grid } from "@mui/material";
import "./App.css";
// import MyForm from "./Components/MyForm";
// import MyTable from "./Components/MyTable";
import SignIn from "./Containers/Login";

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <SignIn />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
