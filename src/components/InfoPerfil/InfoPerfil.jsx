import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { Button } from "../Button";
import { TextField } from "../TextField";

export const InfoPerfil = () => {
  return (
    <div className="modal">
      <div className="container">
        {/* Box à esquerda com uma imagem */}
        <div className="left-box">
          <img src="" alt="Imagem à esquerda" className="left-box-image" />
        </div>
      </div>
      <div className="modal-content">
        <div className="user-profile">
          <div className="user-inputs">
            <div className="input-column">
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Nome"
                  className="outlined-input"
                />
              </div>
              <div className="input-row">
                <input
                  type="email"
                  placeholder="Email"
                  className="outlined-input"
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="CPF"
                  className="outlined-input"
                />
              </div>
            </div>
            <div className="input-column">
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Sobrenome"
                  className="outlined-input"
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Telefone"
                  className="outlined-input"
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Vulnerabilidade social"
                  className="outlined-input"
                />
              </div>
            </div>
          </div>
          <div className="centered-input">
            <input
              type="text"
              placeholder="Sobre"
              className="outlined-input large-input"
            />
          </div>

          <Button
            className="button-instance"
            color="inherit"
            labelClassName="button-2"
            size="m"
            state="enabled"
            text="Salvar Alterações"
            variant="contained"
          />
        </div>
      </div>
    </div>
  );
};
export default InfoPerfil;

//     <div className="modal">
//       <div className="modal-content">
//         <div className="user-profile">
//           <div className="user-inputs">
//             <div className="input-column">
//               <div className="input-row">
//                 <TextField
//                   className="text-field-instance"
//                   hasValue
//                   inputClassName="text-field-2"
//                   size="m"
//                   state="enabled"
//                   text1=""
//                   text="Nome"
//                   variant="outlined"
//                 />
//               </div>
//               <div className="input-row">
//                 <TextField
//                   className="text-field-instance"
//                   hasValue
//                   inputClassName="text-field-2"
//                   size="m"
//                   state="enabled"
//                   text1=""
//                   text="Sobrenome"
//                   variant="outlined"
//                 />
//               </div>
//               <div className="input-row">
//                 <TextField
//                   className="text-field-instance"
//                   hasValue
//                   inputClassName="text-field-2"
//                   size="m"
//                   state="enabled"
//                   text1="Email"
//                   text="Email"
//                   variant="outlined"
//                 />
//               </div>
//             </div>
//             <div className="input-column">
//               <div className="input-row">
//                 <TextField
//                   className="text-field-instance"
//                   hasValue
//                   inputClassName="text-field-2"
//                   size="m"
//                   state="enabled"
//                   text1=""
//                   text="CPF"
//                   variant="outlined"
//                 />
//               </div>
//               <div className="input-row">
//                 <TextField
//                   className="text-field-instance"
//                   hasValue
//                   inputClassName="text-field-2"
//                   size="m"
//                   state="enabled"
//                   text1=""
//                   text="Vulnerabilidade social"
//                   variant="outlined"
//                 />
//               </div>
//               <div className="input-row">
//                 <TextField
//                   className="text-field-instance"
//                   hasValue
//                   inputClassName="text-field-2"
//                   size="m"
//                   state="enabled"
//                   text1=""
//                   text="Telefone"
//                   variant="outlined"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="input-row">
//           <TextField
//             className="text-field-instance"
//             hasValue
//             inputClassName="text-field-2"
//             size="m"
//             state="enabled"
//             text1=""
//             text="Sobre"
//             variant="outlined"
//           />
//         </div>
//         <Button
//           className="button-instance"
//           color="inherit"
//           labelClassName="button-2"
//           size="m"
//           state="enabled"
//           text="Salvar Alterações"
//           variant="contained"
//         />{" "}
//       </div>
//     </div>
//   );
// };

// export default InfoPerfil;
