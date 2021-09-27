
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import './pagin.css'


  const Pagination = () => {
    const [posts, setPosts]=useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/comments  ')
      .then(res => res.json())
      .then(data=>{
          setPosts(data)
      })
  })   


    const usersPerPage = 4
    const pagesVisited = pageNumber * usersPerPage

    const displayUsers = posts.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post)=>{
      return(
        <tr key={post.id} style={{marginBottom:'20px'}}>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.email}</td>
        <td>{post.body}</td>
    </tr>
      )
    })

    const pageCount = Math.ceil(posts.length/usersPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected)
    };

   
    return (
        <div className='container-md'>
            <h2 style={{textAlign:'center', marginBottom:'20px'}} >Paginations</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                   <th>#</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                  <th>Username</th>
               </tr>
              </thead>
          
              <tbody>
              {displayUsers}
             </tbody>
           </Table>
           <ReactPaginate  
           previousLabel= {"Previous"}
           nextLabel = {"Next"}
           pageCount = {pageCount}
           onPageChange= {changePage}
           containerClassName= {"paginationBttns"}
           previousLinkClassName= {"previusBttn"}
           nextLinkClassName ={"nextBttn"}
           disabledClassName = {"paginationDisabled"}
           activeClassName ={"paginationActive"} />
          
        </div>
    );
};
export default Pagination;
