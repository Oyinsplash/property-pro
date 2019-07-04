import {
  postAd, changePropStatus,
} from '../helpers/propertyHelper';
import property from '../models/property';


// Post properties.
class propertyController {
  static createPropAd(req, res) {
    const newAd = postAd(req.body);
    return res.status(201).json({
      status: 'success',
      data: newAd,
    });
  }

  // Update property status

  static updatePropertyAdStatus(req, res) {
    const { propertyId } = req.params;
    const { status } = req.body;
    const property3 = changePropStatus(parseInt(propertyId, 10), status);
    return res.status(200).json({
      status: 'success',
      data: property3,
    });
  }


  // Update property data

  static updatePropertyAdData(req, res) {
    const newPropUpdate = { ...req.body };
    const { propertyId } = req.params;
    const specificProperty = property.find(data => data.id === parseInt(propertyId, 10));
    const propertyIndex = property.indexOf(specificProperty);
    Object.assign(specificProperty, newPropUpdate);
    property.splice(propertyIndex, 1, specificProperty);


    return res.status(201).json({
      status: 'success',
      message: 'Property details updated successfully',
      data: specificProperty,
    });
  }
}
export default propertyController;