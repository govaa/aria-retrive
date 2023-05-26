import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProductsDetailsTabs = () => {
    return (
        <div className="products-details-tabs">
            <Tabs>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Additional Information</Tab>
                </TabList>
            
                <TabPanel>
                    <div className="products-description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="products-description">
                        <ul className="additional-information">
                            <li><span>Brand</span> ThemeForest</li>
                            <li><span>Color</span> Brown</li>
                            <li><span>Size</span> Large, Medium</li>
                            <li><span>Weight</span> 27 kg</li>
                            <li><span>Dimensions</span> 16 x 22 x 123 cm</li>
                        </ul>
                    </div>
                </TabPanel>
            </Tabs> 
        </div>
    )
}

export default ProductsDetailsTabs;  