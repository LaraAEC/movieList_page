import { Container } from './styles';

export function ButtonTextBack({title, ...rest}) {
  return(
    <Container
      type="button"
      {...rest}
    >
      {title}
    </Container>
  );
}
