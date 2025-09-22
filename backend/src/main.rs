use axum::{
    Json, Router,
    extract::{Path, Query},
    http::StatusCode,
    response::IntoResponse,
    routing::{get, post},
};
use axum_extra::{TypedHeader, headers::UserAgent};
use serde::{Deserialize, Serialize};
use tokio::net::TcpListener;

async fn path_route(Path(id): Path<String>) -> String {
    id
}

#[derive(Deserialize, Serialize)]
struct Query_struct {
    message: String,
    id: i32,
}

async fn query_route(Query(query): Query<Query_struct>) -> Json<Query_struct> {
    Json(query)
}

async fn header_route(TypedHeader(user_agent): TypedHeader<UserAgent>) -> impl IntoResponse {
    let ua_string = user_agent.to_string();
    (StatusCode::OK, ua_string)
}

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:3000").await.unwrap();
    let app = Router::new().route("/", get(header_route));

    axum::serve(listener, app).await.unwrap();
}
