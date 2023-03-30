fetch('https://dummyjson.com/products')
    .then((res: Response) => {
        return res.json(); 
    })
    .then((objectData: { products: { id: number, title: string, description: string, brand: string, category: string }[] }) => {
        let td = "";
        objectData.products.map((values) => {
            td += `<tr>
                    <td scope="col">${values.id}</td>
                    <td scope="col">${values.title}</td>
                    <td scope="col">${values.description}</td>
                    <td scope="col">${values.brand}</td>
                    <td scope="col">${values.category}</td>
                  </tr>`;
                
        })
        document.getElementById("table_body")!.innerHTML = td;
        
    });



