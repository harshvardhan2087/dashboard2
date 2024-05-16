

import {
    Card,
    CardContent,
    CardHeader,

  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"

async function DetailsOfUsers(id){
    try{
        const apiResponse = await fetch(`https://dummyjson.com/users/${id}`);
        const result = await apiResponse.json();
        return result;
    }catch(error){
        throw new Error(error);
    }
}

export default async function userDetails({params}){
    console.log(params);
    const userDetails = await DetailsOfUsers(params.userDetails);

    return(
        <>  
                <Card className='text-center'>
                        <CardHeader>
                            Details of User
                        </CardHeader>
                        <CardContent>
                        <div className="flex flex-col space-y-1.5">
                        <Label >Name: {userDetails.firstName}</Label>    
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label >Name: {userDetails.lastName}</Label>    
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label >Age: {userDetails.age}</Label>    
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label >Email: {userDetails.email}</Label>    
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label >phone: {userDetails.phone}</Label>    
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label >Heigth: {userDetails.height}</Label>   
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label >weight: {userDetails.weight}</Label>   
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label >Eye Color: {userDetails.eyeColor}</Label>    
                        </div>            
                        </CardContent>
                </Card>
            
        </>
    )
}