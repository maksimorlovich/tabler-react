import * as React from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { Button, Card, Page, Modal, El, Grid, Text, Icon } from "tabler-react";

import SiteWrapper from "../SiteWrapper";
import SimpleFormModal from "./components/SimpleFormModal";

type ModalsPageState = {
  simpleModal: boolean;
  largeModal: boolean;
  smallModal: boolean;
  fullWidthModal: boolean;
  scrollableModal: boolean;
  successModal: boolean;
  simpleFormModal: boolean;
};

const defaultState: ModalsPageState = {
  simpleModal: false,
  largeModal: false,
  smallModal: false,
  fullWidthModal: false,
  scrollableModal: false,
  successModal: false,
  simpleFormModal: false,
};

function ModalsPage() {
  const [showModal, setShowModal] = React.useState(defaultState);
  const handleClose = (modal: keyof ModalsPageState) => {
    setShowModal({
      ...defaultState,
      [modal]: false,
    });
  };
  const handleOpen = (modal: keyof ModalsPageState) => {
    setShowModal({
      ...defaultState,
      [modal]: true,
    });
  };

  return (
    <SiteWrapper>
      <Page.Content title="Modals">
        <Card>
          <Card.Body>
            <Button.List>
              <Button color="white" onClick={() => handleOpen("simpleModal")}>
                Simple modal
              </Button>
              <Button color="white" onClick={() => handleOpen("largeModal")}>
                Large modal
              </Button>
              <Button color="white" onClick={() => handleOpen("smallModal")}>
                Small modal
              </Button>
              <Button
                color="white"
                onClick={() => handleOpen("fullWidthModal")}
              >
                Full width modal
              </Button>
              <Button
                color="white"
                onClick={() => handleOpen("scrollableModal")}
              >
                Scrollable modal
              </Button>
              <Button color="white" onClick={() => handleOpen("successModal")}>
                Success modal
              </Button>
              <Button
                color="white"
                onClick={() => handleOpen("simpleFormModal")}
              >
                Modal with simple form
              </Button>
            </Button.List>
          </Card.Body>
        </Card>

        <Modal
          show={showModal.simpleModal}
          onDismiss={() => handleClose("simpleModal")}
        >
          <Modal.Header title="Modal title" closeButton />
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo
            nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
            tempora totam unde.
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button color="white" className="mr-auto">
              Close
            </Modal.Button>
            <Modal.Button color="primary">Save changes</Modal.Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showModal.largeModal}
          onDismiss={() => handleClose("largeModal")}
          modalSize="lg"
        >
          <Modal.Header title="Large modal" closeButton />
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo
            nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
            tempora totam unde.
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button color="white" className="mr-auto">
              Close
            </Modal.Button>
            <Modal.Button color="primary">Save changes</Modal.Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showModal.smallModal}
          onDismiss={() => handleClose("smallModal")}
          modalSize="sm"
        >
          <Modal.Body>
            <El.Div className="modal-title">Are you sure?</El.Div>
            <El.Div>
              If you proceed, you will lose all your personal data.
            </El.Div>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button link className="mr-auto">
              Close
            </Modal.Button>
            <Modal.Button color="danger">Yes, delete all my data</Modal.Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showModal.fullWidthModal}
          onDismiss={() => handleClose("fullWidthModal")}
          modalSize="full-width"
        >
          <Modal.Header title="Full width modal" closeButton />
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo
            nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
            tempora totam unde.
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button color="white" className="mr-auto">
              Close
            </Modal.Button>
            <Modal.Button color="primary">Save changes</Modal.Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showModal.scrollableModal}
          onDismiss={() => handleClose("scrollableModal")}
          scrollable
        >
          <Modal.Header title="Scrollable modal" closeButton />
          <Modal.Body>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button color="white" className="mr-auto">
              Close
            </Modal.Button>
            <Modal.Button color="primary">Save changes</Modal.Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showModal.successModal}
          onDismiss={() => handleClose("successModal")}
          modalSize="sm"
          statusBarColor="success"
          closeButton
        >
          <Modal.Body className="text-center py-4">
            <Icon name="check-circle" className="text-green" />
            <El.H3>Payment succeeded</El.H3>
            <Text muted>
              Your payment of $290 has been successfully submitted. Your invoice
              has been sent to support@tabler.io.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <El.Div className="w-100">
              <Grid.Row>
                <Grid.Col>
                  {/* <Modal.Button as="a" href="/" color="white" className="mr-auto w-100">Go to dashboard</Modal.Button> */}
                  <ReactRouterNavLink
                    to="/"
                    activeClassName=""
                    className="btn btn-white mr-auto w-100"
                  >
                    Go to dashboard
                  </ReactRouterNavLink>
                </Grid.Col>
                <Grid.Col>
                  <Modal.Button color="success" className="w-100">
                    View invoice
                  </Modal.Button>
                </Grid.Col>
              </Grid.Row>
            </El.Div>
          </Modal.Footer>
        </Modal>

        <SimpleFormModal
          show={showModal.simpleFormModal}
          onDismiss={() => handleClose("simpleFormModal")}
        />
      </Page.Content>
    </SiteWrapper>
  );
}

export default ModalsPage;
