  const Product=require("../datamodel/product" );

  const getAllProducts=async(req,res)=>{
    const {company,name,sort,select}=req.query;
    const eObject={};
    if(company)
    {
      eObject.company=company;
      console.log(eObject.company)
    }
    if(name)
    {
      eObject.name={ $regex:name,$options:"i"};
      console.log(eObject.name)
    }

    if(select)
    {
      let selectFix=select.split(",").join(" ");
      apiData=apiData.select(selectFix);
    }

   

    if(sort)
    {
      let sortFix=sort.split(",").join(" ");
      apiData=apiData.sort(sortFix);
    }

let page=Number(req.query.page)||1;
let limit=Number(req.query.limit)||3;
let skip=(page-1)*limit;
let apiData=Product.skip(skip).limit(limit);


//page=2;
//limit=3;
//skip=1*3=3;


    //const mydata=await Product.find(req.query);
    const mydata=await apiData;
    res.status(200).json({mydata})
  };

  const getAllProductsTutorial=async(req,res)=>{
    res.status(200).json({msg:"I am getAllProductsTutorial"})
  };

  module.exports={getAllProducts,getAllProductsTutorial}