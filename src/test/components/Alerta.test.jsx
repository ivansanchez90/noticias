import { render, screen } from "@testing-library/react";
import Alerta from "../../components/Alerta";


describe('<Alerta />', () => {
    it('Should render component', async () => {
        render(<Alerta />);
        const comp = screen.getByRole('alert')
        expect(comp).toBeInTheDocument()
    });
});