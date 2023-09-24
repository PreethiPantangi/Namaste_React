import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  Logo
 *  Nav Items
 * 
 * Body
 *  Search
 *  RestaurantContainer
 *      RestaurantCard
 *          Image
 *          Name
 *          Rating
 *          Cuisine
 *          ETA
 *  Footer
 *      Copyright
 *      Links
 *      Address
 *      Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" 
                    alt="Swiggy-clone"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Not a preffered way
const styleResCard = {
    backgroundColor: "#D3D3D3"
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = resData.info; // Optional Chaining
    return (
        <div className="res-card" style={styleResCard}>
            <img 
            className="res-card-image"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
}

const restaurantsList = [
    {
      "info": {
        "id": "623059",
        "name": "Varalakshmi Tiffins",
        "cloudinaryImageId": "8523266de1213e8ea57e5df4eedf747e",
        "locality": "Aditya Nagar",
        "areaName": "Nizampet & Pragathi Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "623059",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4500
        },
        "parentId": "6482",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-24 12:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/varalakshmi-tiffins-aditya-nagar-nizampet-and-pragathi-nagar-hyderabad-623059",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "340484",
        "name": "Millet Express",
        "cloudinaryImageId": "f89f83a650ad14380ffa50fccd9e2ac3",
        "locality": "Kphb",
        "areaName": "Kukatpally",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Healthy Food",
          "South Indian",
          "North Indian",
          "Biryani",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "340484",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4500
        },
        "parentId": "10639",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 5.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "5.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-25 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/millet-express-kphb-kukatpally-hyderabad-340484",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "173942",
        "name": "Shri Raghavendra Bhavan",
        "cloudinaryImageId": "ivmqibun8scfno5aq2c5",
        "locality": "MIYAPUR",
        "areaName": "Indira Nagar Colony",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "173942",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "19582",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-24 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/shri-raghavendra-bhavan-miyapur-indira-nagar-colony-hyderabad-173942",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "39782",
        "name": "Idly Dosa for You",
        "cloudinaryImageId": "erqg3ujdbpd6lr7fjoe9",
        "locality": "Miyapur X roads",
        "areaName": "Sri Durga Colony",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "South Indian",
          "Chinese",
          "Snacks"
        ],
        "avgRating": 3.8,
        "veg": true,
        "feeDetails": {
          "restaurantId": "39782",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "6458",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-24 22:39:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/idly-dosa-for-you-miyapur-x-roads-sri-durga-colony-hyderabad-39782",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "235660",
        "name": "Sree Krishna Vilas",
        "cloudinaryImageId": "ynzkkagiisyybtozvpxb",
        "locality": "Sri Aurobindo Colony",
        "areaName": "Miyapur",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "235660",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "193148",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "16 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-24 22:01:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sree-krishna-vilas-sri-aurobindo-colony-miyapur-hyderabad-235660",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "2763",
        "name": "Navayuga Hotel",
        "cloudinaryImageId": "nquvrh2pmztsggx0q5zr",
        "locality": "Chandhanagar",
        "areaName": "Chanda Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "2763",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "19351",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-24 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/navayuga-hotel-chandhanagar-chanda-nagar-hyderabad-2763",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "759927",
        "name": "Babai Hotel Est.1942",
        "cloudinaryImageId": "c3bc32ad3ed9515bb0bf77c419d5a429",
        "locality": "Miyapur",
        "areaName": "Miyapur",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "759927",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "410041",
        "avgRatingString": "4.4",
        "totalRatingsString": "10+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-24 11:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/babai-hotel-est-1942-miyapur-hyderabad-759927",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "631269",
        "name": "Istas Cafe - Tiffins",
        "cloudinaryImageId": "ct5b64yxczo38zaeudpf",
        "locality": "Hafeezpet road",
        "areaName": "Kukatpally",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "Healthy Food"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "631269",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3900
        },
        "parentId": "377703",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-24 11:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/istas-cafe-tiffins-hafeezpet-road-kukatpally-hyderabad-631269",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "373558",
        "name": "Chaitanya Food Court - Tiffins",
        "cloudinaryImageId": "ms3yshlgd3bmjnioaijf",
        "locality": "Kphb Colony",
        "areaName": "Kukatpally",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "373558",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4500
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4500
        },
        "parentId": "453215",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 5.9,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "5.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-24 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-c0709cf2-b6ef-4be2-8243-8e12e0d2c6ea"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chaitanya-food-court-tiffins-kphb-colony-kukatpally-hyderabad-373558",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restaurantsList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
