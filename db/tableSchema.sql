CREATE TABLE reviews (
	id SERIAL NOT NULL,
	product_id INT NOT NULL,
	rating INT,
	date VARCHAR(100),
	summary VARCHAR(120),
	body TEXT,
	recommend BOOLEAN,
	reported BOOLEAN,
	reviewer_name VARCHAR(100),
	reviewer_email VARCHAR(100),
	response TEXT,
	helpfulness INT,
  PRIMARY KEY (id)
);

CREATE TABLE characteristics (
	id SERIAL NOT NULL,
  product_id INT NOT NULL,
  name VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE characteristics_review (
  id SERIAL NOT NULL,
 	characteristic_id INT NOT NULL,
  review_id INT NOT NULL,
  value VARCHAR(10),
  PRIMARY KEY (id),
  FOREIGN KEY (characteristic_id)
  REFERENCES characteristics (id),
  FOREIGN KEY (review_id)
  REFERENCES reviews (id)
);

CREATE TABLE photos (
	id SERIAL NOT NULL,
  review_id INT NOT NULL,
  url TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (review_id)
  REFERENCES reviews (id)
);

\copy reviews from '/users/tangqi/desktop/hack/sdc/reviews.csv' delimiter ',' csv header; 
\copy characteristics from '/users/tangqi/desktop/hack/sdc/characteristics.csv' delimiter ',' csv header;
\copy characteristics_review from '/users/tangqi/desktop/hack/sdc/characteristic_reviews.csv' delimiter ',' csv header; 
\copy photos from '/users/tangqi/desktop/hack/sdc/reviews_photos.csv' delimiter ',' csv header;


CREATE INDEX reviews_productid_idx ON reviews (product_id);
CREATE INDEX characteristics_productid_idx ON characteristics (product_id);
CREATE INDEX characteristics_review_reviewid_idx ON characteristics_review (review_id);
CREATE INDEX photos_reviewid_idx ON photos (review_id);


