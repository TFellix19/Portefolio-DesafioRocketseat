export function CardProjects(props) {
    return (
        <div className="cardprojects d-inline-block  mt-4"> 
            <div className="container p-4">
                <div className="align-content-center"> 
                    <img  style={{marginRight:'3%'}} src="../src/assets/folder.svg" alt="folder" />
                    <b>{props.tituloProjeto}</b> 
                </div>
                <div className="mt-3">
                    <p>{props.descricao}</p>
                </div>
            <div className="d-inline align-content-between mt-5">
                    <span>
                        <img  style={{marginRight:'3%'}} src="../src/assets/star.svg" alt="star" /> 
                        <label style={{marginRight:'5%'}}>100</label>
                    </span>
               
                     <span>
                        <img style={{marginRight:'5%'}} src="../src/assets/git-branch.svg" alt="star" /> 
                        <label>100</label>
                    </span>
               
                     <span>
                        <img style={{marginLeft:'10%'}} src="../src/assets/js.svg" alt="star" /> 
                        <label style={{marginLeft:'3%'}}>Javascript</label>
                    </span>
            </div>
        </div>
    </div>
    );
  }