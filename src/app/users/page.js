
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from "next/link";
import userDetails from "./[userDetails]/page";

async function fetchListUsers(){
    try {
        const apiResponse = await fetch('https://dummyjson.com/users');
        const result = await apiResponse.json();
        return result.users;
    }catch(error){
        throw new Error(error);
    }
}

export default async function Users(){
    const Users = await fetchListUsers();

    return(
        <>
        <Table>
        
                
            <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
            </TableRow>
            <TableBody>
                {
                    Users.map((users) => {
                        return(
                           
                            <TableRow className="cursor-pointer"> 
                             
                              
                                <TableCell> <Link href={`/users/${users.id}`}>{users.firstName}</Link></TableCell>
                                <TableCell> <Link href={`/users/${users.id}`}>{users.gender}</Link></TableCell>
                                <TableCell> <Link href={`/users/${users.id}`}>{users.email}</Link></TableCell>
                                <TableCell > <Link href={`/users/${users.id}`}>{users.phone}</Link></TableCell>
                            
                                 
                            </TableRow>
                          
                        )
                    })
                }
            </TableBody>
      
           
        </Table>
        
        
        </>
    )
}