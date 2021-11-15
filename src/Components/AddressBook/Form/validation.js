const Validation = (values) => {

  let errors={};

  if(!values.city){
    errors.city="City is required"
  }

  if(!values.city_prefix){
    errors.city_prefix="City prefix is required"
  }

  if(!values.city_suffix){
    errors.city_suffix="City suffix is required"
  }
  
  if(!values.community){
    errors.community="Community is required"
  }

  if(!values.country){
    errors.country="Country is required"
  }

  if(!values.street_address){
    errors.street_address="Street address is required"
  }

  if(!values.secondary_address){
    errors.secondary_address="Secondary address is required"
  }

  if(!values.full_address){
    errors.full_address="Full address is required"
  }
  
  if(!values.country_code){
    errors.country_code="Country code is required"
  }

  if(!values.state){
    errors.state="State is required"
  }

  if(!values.state_abbr){
    errors.state_abbr="State abbr is required"
  }

  if(!values.street_name){
    errors.street_name="Street name is required"
  }

  if(!values.street_suffix){
    errors.street_suffix="Street suffix is required"
  }

  if(!values.time_zone){
    errors.time_zone="Time zone is required"
  }

  if(!values.zip){
    errors.zip="Zip is required"
  }

  if(!values.zip_code){
    errors.zip_code="Zip code is required"
  }

  if(!values.building_number){
    errors.building_number="Building number is required"
  }

  if(!values.id){
    errors.id="Id is required"
  }

  if(!values.mail_box){
    errors.mail_box="Mail box is required"
  }

  if(!values.postcode){
    errors.postcode="Postcode is required"
  }

  if(!values.uid){
    errors.uid="Uid is required"
  }
  return errors
}

export default Validation;
