use axum::{
    Json, Router,
    extract::{Path, Query},
    routing::{get, post},
};
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

async fn header_route() {}

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:3000").await.unwrap();
    let app = Router::new().route("/", get(query_route));

    axum::serve(listener, app).await.unwrap();
}
