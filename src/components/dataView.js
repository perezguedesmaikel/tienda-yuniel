
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { ProductService } from '../service/ProductService';
import { Rating } from 'primereact/rating';
import './dataview/dataviewDemo.css';


    const DataViewDemo = () => {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <img src={`images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description} Esta cartera es buena hay d evarias tallas</div>
                        <Rating value={data.rating} readOnly cancel={false}> </Rating>
                        <i className="pi pi-tag product-category-icon"> </i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}> </Button>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className=" d-inline-block justify-content-center " id='tienda' >
                <div className="product-grid-item card "  >
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"> </i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="product-grid-item-content  ">
                        <img src={`images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description} Esta cartera es buena hay d evarias tallas  </div>
                        <Rating value={data.rating} readOnly cancel={false}> </Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" className='mx-1' label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}> </Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="d-flex justify-content-center flex-wrap" style={{textAlign: 'left'}}>
                    <Dropdown  className="col-6 m-2" options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
                    <div className="col-6 m-2" style={{textAlign: 'right'}}>
                        <DataViewLayoutOptions  layout={layout} onChange={(e) => setLayout(e.value)} />
                    </div>

                </div>

            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo  " id='tienda'>
            <div className="card  ">
                <DataView value={products} layout={layout} header={header}
                          itemTemplate={itemTemplate} paginator rows={10}
                          sortOrder={sortOrder} sortField={sortField} />
            </div>
        </div>
    );
}
export default DataViewDemo;