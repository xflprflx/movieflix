import { AxiosRequestConfig } from "axios";
import Review from "components/Review";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { hasAnyRoles } from "util/auth";
import { requestBackend } from "util/requests";
import "./styles.css";

type FormData = {
  review: string;
};

type ReviewData = {
  text: string;
  user: {
    id: number;
    name: string;
  };
};

type UrlParams = { movieId: string}

const MoviesReview = () => {

  const { movieId } = useParams<UrlParams>();

  const [reviewState, setReviewState] = useState<[ReviewData]>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setReviewState(response.data);
    });
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData : FormData) => {
    const params: AxiosRequestConfig = {
      method: "POST",
      url: `/reviews`,
      withCredentials: true,
      data:{
        text: formData.review,
        movieId: movieId
      }
    };
    requestBackend(params).then((response) => {
      setReviewState(response.data);
    }).finally(() => window.location.reload());
  };

  return (
    <div className="page-container">
      <h1>Tela detalhes do filme id: {movieId}</h1>
      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <div className="input-containter">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("review", {
                required: "Campo obrigatório",
              })}
              type="text"
              className={`form-control base-input ${
                errors.review ? "is-invalid" : ""
              }`}
              placeholder="Digite sua avaliação aqui!*"
              
              name="review"
            />
            <div className="review-submit">
              <button className="btn">SALVAR AVALIAÇÃO</button>
            </div>
          </form>
        </div>
      )}
      <div className="review-container">
              {reviewState ? reviewState.map((element) => (
                <Review name={element.user.name} text={element.text} key={element.text}/>
              )) : ""}
      </div>
    </div>
  );
};

export default MoviesReview;
