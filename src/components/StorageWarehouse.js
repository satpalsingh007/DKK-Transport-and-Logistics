import React from 'react';

const roadFreightImage = new URL("../images/storagewarehouse.avif", import.meta.url).href;

function StorageWarehouse() {
  return (
    <div className="road-freight">
      <div className="freight-header">
        <h1>Storage & Warehousing Services</h1>
        <p>Secure, flexible, and efficient warehousing solutions to support your supply chain.</p>
      </div>

      <div className="freight-content">
        <div className="freight-image">
          <img src={roadFreightImage} alt="Storage and Warehousing Services" />
        </div>

        <section className="freight-details">
          <h2>Why Choose Our Warehousing?</h2>
          <ul>
            <li><strong>Secure Facilities:</strong> Monitored warehouses with controlled access and safety measures.</li>
            <li><strong>Flexible Storage:</strong> Short-term and long-term storage options tailored to your needs.</li>
            <li><strong>Inventory Management:</strong> Organized handling for easy access and accurate stock control.</li>
            <li><strong>Strategic Locations:</strong> Warehouses positioned for efficient distribution and transport.</li>
            <li><strong>Cost-Effective:</strong> Scalable solutions that help reduce operational costs.</li>
          </ul>

          <h2>Our Storage Facilities</h2>
          <p>
            Our warehousing facilities are equipped to handle a wide range of goods,
            from general cargo to palletized freight, ensuring safe storage and smooth handling.
          </p>

          <h2>Get a Quote</h2>
          <p>
            Looking for reliable storage or warehousing support? Contact us today to discuss
            your requirements and receive a customized solution.
          </p>
          <p>Email: dkktransport@yahoo.com | Phone: +61 431-730-804</p>
        </section>
      </div>
    </div>
  );
}

export default StorageWarehouse;
