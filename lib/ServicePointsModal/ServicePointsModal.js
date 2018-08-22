import React from 'react';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import { setCurServicePoint } from '@folio/stripes-core/src/loginServices';
import Modal from '@folio/stripes-components/lib/Modal';
import Button from '@folio/stripes-components/lib/Button';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';

class ServicePointsModal extends React.Component {
  static propTypes = {
    servicePoints: PropTypes.arrayOf(PropTypes.object),
    stripes: PropTypes.object,
    open: PropTypes.bool
  };

  setCurrentServicePoint(servicePoint) {
    const { stripes: { store } } = this.props;
    setCurServicePoint(store, servicePoint);
  }

  render() {
    const { servicePoints, stripes: { intl }, open } = this.props;

    return (
      <Modal open={open} label={intl.formatMessage({ id: 'stripes-core.selectServicePoint' })}>
        <Col xs={12}>
          <Row>
            {
              sortBy(servicePoints, ['name']).map((sp, index) => (
                <Button
                  key={sp.id}
                  id={`service-point-btn-${index}`}
                  arial-label={sp.name}
                  fullWidth
                  onClick={() => this.setCurrentServicePoint(sp)}
                >
                  {sp.name}
                </Button>
              ))
            }
          </Row>
        </Col>
      </Modal>
    );
  }
}

export default ServicePointsModal;
