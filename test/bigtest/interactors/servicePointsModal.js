import {
  interactor,
  clickable,
  isPresent,
} from '@bigtest/interactor';

@interactor
class SelectServicePointInteractor {
    static defaultScope = ('[data-test-servicepoints-modal]');

    // are there at least two servicepoints to select from?
    presentDefault = isPresent('.primary');
    presentAlternative = isPresent('.default')
    // if there is more than one choice, then button 0 will never be the default.
    // so clicking button 0 should change the default service point
    changeServicePoint = clickable('#service-point-button-0');
    close = clickable('button[aria-label="Dismiss modal"]');
}

@interactor
class ServicePointsModalInteractor {
      present = isPresent('[data-test-servicepoints-modal]');

      // if the modal is present, proceed with next stage of the test
      buttons = new SelectServicePointInteractor();
}

export default ServicePointsModalInteractor;

