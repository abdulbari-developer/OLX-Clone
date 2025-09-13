import React, { useState } from 'react'
import poster from '../../assets/img/poster.jpg'
import mobile from '../../assets/img/mobiles.png'
import rent from '../../assets/img/property-for-rent.png'
import sale from '../../assets/img/property-for-sale.png'
import vihicle from '../../assets/img/vehicles.png'
import bike from '../../assets/img/bikes.png'
import animal from '../../assets/img/animals.png'
import fashion from '../../assets/img/fashion-beauty.png'
import electronic from '../../assets/img/electronics-home-appliances.png'
import furniture from '../../assets/img/furniture-home-decor.png'
import industry from '../../assets/img/business-industrial-agriculture.png'
import kid from '../../assets/img/kids.png'
import job from '../../assets/img/jobs.png'
import books from '../../assets/img/books-sports-hobbies.png'
import services from '../../assets/img/services.png'
import product from '../product_list'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    let categories = ["Mobiles", "Vehicles", 'Properties For Sale', 'Properties For Rent', 'Electronics & Home', 'Bikes', "Business & Industrial", 'Services', 'Jobs', 'Animal', 'Furniture & Home Decor', 'Fashion & Beauty', 'Books, Sports & Hobbies', 'Kids']
    let cates=[
        
        {
            index:1,
            title:"Mobile Phones",
            category: 'Mobiles'
        },
        {
            index:2,
            title:"Cars",
            category: 'Vehicles'
        },
        {
            index:3,
            title:"Motorcycles",
            category: 'Bikes'
        },
        {
            index:4,
            title:"Houses",
            category: 'Properties For Rent'
        },
        {
            index:5,
            title:"Electronics & Home",
            category:'Electronics & Home'
        },
        {
            index:6,
            title:"Animal",
            category: 'Animal'
        },
        {
            index:7,
            title:"Land & Plots",
            category: 'Properties For Sale'
        },
    ]

    let boxex=[
        {
             index :1,
             title: 'Mobiles',
             img : mobile, 
        },
        {
             index :2,
             title: 'Vehicles',
             img : vihicle, 
        },
        {
             index :3,
             title: 'Properties For Sale',
             img : sale, 
        },
        {
             index :4,
             title: 'Properties For Rent',
             img : rent, 
        },
        {
             index :5,
             title: 'Electronics & Home...',
             img : electronic, 
        },
        {
             index :6,
             title: 'Bikes',
             img : bike, 
        },
        {
             index :7,
             title: 'Business & Industrial....',
             img : industry, 
        },
        {
             index :8,
             title: 'Services',
             img : services, 
        },
        {
             index :9,
             title: 'Jobs',
             img : job, 
        },
        {
             index :10,
             title: 'Animal',
             img : animal, 
        },
        {
             index :11,
             title: 'Furniture & Home Decor',
             img : furniture, 
        },
        {
             index :12,
             title: 'Fashion & Beauty',
             img : fashion, 
        },
        {
             index :13,
             title: 'Books, Sports & Hobbies',
             img : books, 
        },
        {
             index :14,
             title: 'Kids',
             img : kid, 
        },
    ]
    const [products, setproducts] = useState(product)
     const [selectCategary, setselectCategary] = useState('')

        let navigate = useNavigate()
        const handleChange = (e) =>{
            let selected = e.target.value;
            setselectCategary(selected)
            if(selected){
                navigate(`/Categories/${selected}`)
            }
        }
        const handleCategorySelect=(category)=>{
            setselectCategary(category)
            navigate(`/Categories/${category}`)
        }
        
  return (
    <>
      <div className="categories">
        <div className="cat-1">
             <select name="" id="cat" onChange={handleChange} value={selectCategary}>
                    <option value="">All Categories</option>
                    {
                        categories.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))
                    } </select>
        {
            cates.map((item,index)=>(
                <p key={index} className='cat-1-p' onClick={()=>handleCategorySelect(item.category)}>{item.title}</p>
            ))
        }
        </div>
        <div className="poster">
            <img src={poster} alt="" className='poster-img' />
        </div>
        <div className="boxex"  >
            {
            boxex.map((item,index)=>(
            <div className="box" key={item.index} onClick={()=>handleCategorySelect(item.title)}>
                <img src={item.img} alt="" />
                <p className='cat-2-p'>{item.title}</p>
            </div>
))}
        </div>
      </div>
    </>
  )
}

export default Categories
