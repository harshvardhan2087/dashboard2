
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
async function listofProducts(){
    try {
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        return result.products;

    }catch(error){
        throw new Error(error);
    }

}

export default async function Dashboard(){
    const Products = await listofProducts();
    return (
        <div > 
                {
                Products.map((product) => {
                    return(
                        <div className="grid grid-cols-3 p-4">
                        <Card className='p-4'>
                            <CardTitle className="text-center">{product.title}</CardTitle>
                            <CardDescription className='text-lg'>{product.description}</CardDescription>
                            <CardFooter className='text-xs text-bold'>Price: {product.price}</CardFooter>
                        </Card>
                        </div>
                    )
                })
            }
                
                    </div>
    )
}