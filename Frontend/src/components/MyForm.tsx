// import { Button, Container, Input } from "@mui/material";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserSlice } from "../redux/Slice/user";
// import { addUsersSlice, editUsersSlice } from "../redux/Slice/users";
// import { nanoid } from "@reduxjs/toolkit";
// import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";

// const MyForm = () => {
//   // const [user, setuesr] = useState({
//   //     id: "0",
//   //     name: "",
//   //     email: "",
//   //     password: "",
//   // });state.user
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const handleChange = (prop: any) => (event: any) => {
//     dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
//   };

//   const handleSubmit = () => {
//     // user.id === 0 ?  dispatch(addUsersSlice({...user, id: nanoid(8)})): dispatch(editUsersSlice(user));
//     console.log("submit");
//     console.log(user.id);

//     user.id === 0
//       ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
//       : dispatch({ type: UPDATE_USER_BY_ID, user });
//     console.log(user.id);
//     dispatch(
//       setUserSlice({
//         id: 0,
//         name: "",
//         email: "",
//         password: "",
//       })
//     );

//     console.log("user");
//   };
//   return (
//     <>
//       <Container>
//         <Input placeholder="" value={user.id} fullWidth disabled />
//         <Input
//           onChange={handleChange("name")}
//           placeholder="Enter name"
//           value={user.name}
//           fullWidth
//         />
//         <Input
//           onChange={handleChange("email")}
//           placeholder="Enter Email"
//           value={user.email}
//           fullWidth
//         />
//         <Input
//           onChange={handleChange("password")}
//           placeholder="Enter Password"
//           value={user.password}
//           fullWidth
//         />
//         <Button onClick={() => handleSubmit()} fullWidth variant="contained">
//           Submit
//         </Button>
//         ;
//       </Container>
//     </>
//   );
// };

// export default MyForm;
